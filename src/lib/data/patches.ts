// src/lib/data/patches.ts

// Define the structure for a patch note
export interface PatchNote {
	slug: string;
	version: string;
	date: string;
	title: string;
	coverImageUrl: string; // Expecting a URL or an empty string
	content: string; // HTML string
}

// --- Helper Functions ---

// Simple slugify function
function slugify(text: string): string {
	if (!text) return 'no-title-' + Date.now(); // Fallback for empty titles
	return text
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

// Format ISO date string to YYYY-MM-DD
function formatDate(isoDate: string | null | undefined): string {
	if (!isoDate) return 'N/A';
	try {
		return isoDate.substring(0, 10); // Extract YYYY-MM-DD
	} catch (e) {
		console.error('Error formatting date:', isoDate, e);
		return 'N/A';
	}
}

// Format plain text content to basic HTML (replace newlines with <br>)
function formatContentToHtml(text: string | null | undefined): string {
	if (!text) return '';
	// Replace carriage return + newline pairs first, then standalone newlines
	return text.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />');
}

// --- Source Data (Simulated Fetch or Import) ---
// In a real app, you might fetch this JSON
const sourceData = {
	ProjectName: 'Home Sweet Home: Online',
	Language: 'en_US',
	Environment: 'Release',
	Region: 'Any',
	ServerStatus: 'Online',
	MyAccountURL: '',
	WebpageURL: 'https://niwarnneverdies.nephele.in.th/',
	PatchNotesURL: 'https://discord.gg/hsh-online',
	TermsAndConditionsURL: null,
	PrivacyPolicyURL: 'https://discord.gg/hsh-online',
	ReportBugURL: 'https://discord.gg/hsh-online',
	Alerts: [],
	News: [
		{
			header: 'Server is now open',
			title: 'PATCH 1.7.0.2',
			subtitle: 'NOW AVAILABLE',
			subtitleColor: '#FFFFFF',
			date: '2025-04-10T19:18:13.5215958+07:00',
			imagesURL: ['https://i.ibb.co/DHqb3vKC/nowopen-1.png'],
			videoURL: 'https://youtu.be/72X0OySMzj0',
			interactionURL: 'https://discord.gg/hsh-online',
			content:
				'Dear Niwarner,\r\n\r\nThe server is opened. The following updates and fixes have been applied.\r\n\r\nWarden:\r\nRatri\r\nMannequin was reduced to 3 instead of 7\r\nMovement Speed was reduced to 0 instead of 3\r\nBlink Stamina Drain was increased by 10 Units\r\nStrangle Cooldown was increased by 10 seconds now 35 instead of 25\r\n\r\nSilent Man\r\nDemon\'s Grasp radius was reduced to 700 instead of 1600\r\nMovement Speed was reduced to 0 instead of 2\r\nApparition Cooldown was increased by 10 seconds now 35 instead of 25\r\n\r\nSurvivors:\r\nNipa\r\nSixth Sense the amount of time Nipa can see the Warden was increased by 1 second now 4 instead of 3.\r\n\r\nTim\r\nNona-Metal Knife Stun duration was increased by 1 second now 2 instead of 1.\r\n\r\nMewmew\r\nCheer Up receive self-healing for 10 units per second now instead of 7.\r\n\r\nJessi\r\nLet`s Party Speaker warden now gets a 75 unit speed reducation instead of 50.',
			buttonContent: 'More info...',
			showHeader: true,
			showTitle: true,
			showSubTitle: true,
			subtitleCustomColor: false,
			showContent: true,
			showDate: false,
			showButton: false,
			showVideo: false
		}
	],
	SubNews: [
		{
			title: 'IMPORTANT BALANCE ADJUSTMENT',
			date: '2025-04-16T05:43:15.6178854+07:00',
			imageURL: 'https://i.ibb.co/1GpdqqFM/imp-balance-adjustment.png',
			interactionURL:
				'https://discord.com/channels/1350960579447230494/1354458843421212784/1361421064068137092',
			content:
				'We’re tweaking Ratri’s Dash Stamina and the Visitor perk Stamina Boost Landing for better balance!',
			showTitle: true,
			showContent: true,
			showDate: false
		},
		{
			title: 'AD HOC FIX',
			date: '2025-04-16T05:41:14.3705035+07:00',
			imageURL: 'https://i.ibb.co/1tF7nc2c/image.png',
			interactionURL:
				'https://discord.com/channels/1350960579447230494/1354458843421212784/1360793973609992494',
			content: "We've improved login and now enabled inventory saving!",
			showTitle: true,
			showContent: true,
			showDate: false
		},
		{
			title: 'CURSES & RELICS',
			date: '2025-04-13T00:34:19.9295225+07:00',
			imageURL: 'https://i.ibb.co/SGXM6vv/curse-and-relic-usage.png',
			interactionURL:
				'https://discord.com/channels/1350960579447230494/1354458843421212784/1360667327175200870',
			content: 'Curses and Relics now deplete on use, all players granted 10,000 usage points for now.',
			showTitle: true,
			showContent: true,
			showDate: false
		},
		{
			title: 'AD HOC FIX',
			date: '2025-04-12T21:42:41.8478032+07:00',
			imageURL: 'https://i.ibb.co/xT20KxS/ratri-ad-hoc-fix.png',
			interactionURL:
				'https://discord.com/channels/1350960579447230494/1352500952883793962/1360599603275366472',
			content: "The Survivors' prayer speed on Ratri dolls has been reverted to its original value.",
			showTitle: true,
			showContent: true,
			showDate: false
		},
		{
			title: 'Niwarn Live',
			date: '2025-04-11T20:44:05.4568723+07:00',
			imageURL: 'https://i.ibb.co/KcDntrbN/niwarn-live-poster-1.png',
			interactionURL:
				'https://discord.com/channels/1350960579447230494/1354458843421212784/1360236158830776462',
			content: 'Join us for our first Niwarn Live on Sunday click me for more Information!',
			showTitle: true,
			showContent: true,
			showDate: false
		},
		{
			title: 'Developer Q&A',
			date: '2025-04-07T11:30:26.0567582+07:00',
			imageURL: 'https://i.imgur.com/1DNKn8Y.png',
			interactionURL: 'https://forms.gle/rjkihdHJ5Y74RPQL7',
			content: 'Got a question? Drop it here and we ll cover it in the next Developer Q&A!',
			showTitle: true,
			showContent: true,
			showDate: true // Note: This one has showDate=true, but we format all dates consistently
		}
	]
};

// --- Process Source Data into PatchNote[] ---

const processedPatches: PatchNote[] = [];

// Process News items
sourceData.News.forEach((item) => {
	const version = item.title ? item.title.replace('PATCH ', 'v') : 'Update'; // Extract version or use default
	const title = item.header || item.title || 'Update'; // Prefer header for title
	const date = formatDate(item.date);
	const slug = slugify(`${version}-${title}-${date}`); // Create a unique slug
	const coverImageUrl = item.imagesURL && item.imagesURL.length > 0 ? item.imagesURL[0] : '';

	processedPatches.push({
		slug: slug,
		version: version,
		date: date,
		title: title + (item.subtitle ? ` - ${item.subtitle}` : ''), // Append subtitle if present
		coverImageUrl: coverImageUrl,
		content: formatContentToHtml(item.content) // Format content
	});
});

// Process SubNews items
sourceData.SubNews.forEach((item) => {
	const title = item.title || 'Announcement';
	const date = formatDate(item.date);
	// Use a descriptive "version" for announcements since there's no number
	const version = `Announcement`;
	const slug = slugify(`${title}-${date}`); // Create a unique slug
	const coverImageUrl = item.imageURL || '';
	let content = formatContentToHtml(item.content);

	// Add a link to the interaction URL if available
	if (item.interactionURL) {
		content += `<br /><br /><a href="${item.interactionURL}" target="_blank" rel="noopener noreferrer" class="text-primary-light hover:underline font-semibold">More Info on Discord</a>`;
	}

	processedPatches.push({
		slug: slug,
		version: version,
		date: date,
		title: title,
		coverImageUrl: coverImageUrl,
		content: content
	});
});

// --- Existing Manual Patches (Optional) ---
// You can keep manually defined patches if needed
const manualPatches: PatchNote[] = [
	// {
	// 	slug: 'v1-2-0-spring-update',
	// 	version: 'v1.2.0',
	// 	date: '2025-04-15', // Note: Date might conflict/overlap with JSON data
	// 	title: 'Spring Update',
	// 	coverImageUrl: 'https://i.ibb.co/xT20KxS/ratri-ad-hoc-fix.png', // Example image
	// 	content: `
	// 		<p>We’re excited to bring you the <strong>Spring Update</strong> with tons of new features:</p>
	// 		<ul>
	// 			<li>🌸 New map: <em>Bamboo Village</em></li>
	// 			<li>⚡ Improved matchmaking speed</li>
	// 			<li>🐛 Fixed client crash on MacOS</li>
	// 			<li>🧥 New skins added to the store</li>
	// 		</ul>
	// 	`
	// },
	// {
	// 	slug: 'v1-1-5-balance-patch',
	// 	version: 'v1.1.5',
	// 	date: '2025-03-30', // Note: Date might conflict/overlap with JSON data
	// 	title: 'Balance Patch',
	// 	coverImageUrl: 'https://i.ibb.co/xT20KxS/ratri-ad-hoc-fix.png', // Example image
	// 	content: `
	// 		<p>Balance updates based on community feedback:</p>
	// 		<ul>
	// 			<li>👻 Adjusted Ghost movement speed</li>
	// 			<li>💉 Survivor healing item buffed by 20%</li>
	// 			<li>🖥️ Minor UI improvements</li>
	// 		</ul>
	// 	`
	// }
];

// --- Combine and Export ---

// Combine processed data and manual data
const combinedPatches = [...processedPatches, ...manualPatches];

// Sort all patches by date, newest first
combinedPatches.sort((a, b) => {
	// Handle potential 'N/A' dates - maybe sort them to the end?
	if (a.date === 'N/A' && b.date === 'N/A') return 0;
	if (a.date === 'N/A') return 1; // Put N/A dates after valid dates
	if (b.date === 'N/A') return -1; // Put valid dates before N/A dates

	// Compare valid dates
	try {
		// Use getTime() for reliable comparison
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	} catch (e) {
		console.error('Error comparing dates:', a.date, b.date, e);
		return 0; // Avoid crashing if date parsing fails
	}
});

// Export the final, sorted list
export const patches: PatchNote[] = combinedPatches;

// --- Example Usage (Can be removed - just for verification) ---
// console.log(patches);