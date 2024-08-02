import test, { expect } from "@playwright/test";
import {
	parseTime,
	formatDateSleepCard,
	getStartSleep,
	getSleepDuration,
} from "../src/misc/dates/formatDate";
import { Mood } from "../src/types/userData";

test("Default usage", async ({ page, baseURL }) => {
	await page.goto("/");
	await page.getByRole("button", { name: "Get started" }).click();
	expect(page.url()).toBe(baseURL + "dashboard");
	await page.getByRole("button", { name: "+" }).click();

	const startSleep = "23:00";
	const endSleep = "08:00";

	await page.getByLabel("When did you fall asleep?").fill(startSleep);

	expect(await page.getByLabel("When did you fall asleep?").inputValue()).toBe(
		startSleep,
	);

	await page.getByLabel("When did you wake up?").fill(endSleep);

	expect(await page.getByLabel("When did you wake up?").inputValue()).toBe(
		endSleep,
	);

	await page.getByRole("button", { name: "Add" }).click();

	await page.getByRole("button", { name: "menu icon" }).click();

	const today = new Date(Date.now()).toLocaleDateString("en-us", {});
	await expect(page.getByRole("button", { name: today })).toBeVisible();

	await page.getByRole("button", { name: today }).click();

	const formatedStartSleep = formatDateSleepCard(
		getStartSleep(startSleep, false),
	);
	const formatedEndSleep = formatDateSleepCard(parseTime(endSleep).getTime());

	await expect(page.getByText(formatedStartSleep)).toBeVisible();
	await expect(page.getByText(formatedEndSleep)).toBeVisible();

	const sleepDuration = getSleepDuration({
		id: 0,
		mood: Mood.asAlways,
		endSleep: parseTime(endSleep).getTime(),
		startSleep: getStartSleep(startSleep, false),
	});

	await expect(
		page.getByText(`You slept ${sleepDuration} hours 👍`),
	).toBeVisible();
});
