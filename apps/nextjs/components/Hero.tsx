import { Calendar, CalendarSync } from "lucide-react";

export interface HeroProps {
	/** Title */
	title: string;
	/** publish date */
	publishDate?: string;
	/** updated date */
	lastUpdated?: string;
	/** Option: Image */
	imageUrl?: string;
	/** Option: Tags */
	tags?: HeroTags[];
}

export interface HeroTags {
	/** Tag name */
	name: string;
	/** Tag url */
	url: string;
}

export default function Hero(props: HeroProps) {
	const title = props.title || "No Title";
	const publishDate = props.publishDate || "2023-01-01";
	const lastUpdated = props.lastUpdated || undefined;
	const imageUrl = props.imageUrl || undefined;
	const tags = props.tags || [];

	return (
		<header className="component hero">
			<div
				className="image"
				style={{
					backgroundImage: `url('${
						imageUrl || "/placeholder.svg?height=600&width=1200"
					}')`,
				}}
			></div>
			<div className="absolute inset-0 bg-black/50" />
			<div className="tags">
				{tags.map((tag, index) => (
					<a key={index} href={tag.url} className="tag">
						{tag.name}
					</a>
				))}
			</div>
			<div className="title">{title}</div>
			<div className="publishDate">
				<Calendar />
				{publishDate}
				{lastUpdated && (
					<>
						<span className="mx-2">|</span>
						<CalendarSync />
						{lastUpdated}
					</>
				)}
			</div>
		</header>
	);
}
