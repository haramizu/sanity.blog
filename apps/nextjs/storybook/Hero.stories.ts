// components/Card.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "@/components/Hero";

const meta: Meta<typeof Hero> = {
	title: "Components/Hero",
	component: Hero,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {
		title: "Sample Hero",
		publishDate: "2024/04/16",
		imageUrl: "/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
		tags: [
			{ name: "Tag1", url: "#" },
			{ name: "Tag2", url: "#" },
		],
	},
};

export const WithLastUpdate: Story = {
	args: {
		title: "Sample Hero",
		publishDate: "2024/04/16",
		lastUpdated: "2024/04/17",
		imageUrl: "/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
		tags: [
			{ name: "Tag1", url: "#" },
			{ name: "Tag2", url: "#" },
		],
	},
};
