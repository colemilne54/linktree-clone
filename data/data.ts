interface Link {
   title: string;
   href: string;
   image: string;
   classes?: string;
}

interface Project {
   title: string;
   href: string;
}

interface PortfolioData {
   name: string;
   alt: string;
   avatar: string;
   links: Link[];
   projects: Project[];
}


const data: PortfolioData = {
   "name": "Cole Milne",
   "alt": "Cole Milne headshot image",
   "avatar": "https://avatars.githubusercontent.com/u/20178496?v=4",
   "links": [
      {
         "title": "LinkedIn",
         "href": "https://www.linkedin.com/in/colemilne/",
         "image": "/linkedin.svg"
      },
      {
         "title": "GitHub",
         "href": "https://www.github.com/colemilne54",
         "image": "/github.svg"
      },
      {
         "title": "The Milne Empire",
         "href": "https://themilneempire.com/",
         "image": "/empire.svg"
      },
      {
         "title": "Resume/ Portfolio (Bento UI Style)",
         "href": "https://bento.colemilne.com/",
         "image": "/bento.webp"
      },
      {
         "title": "3D Resume (Outdated content, but still worth a look)",
         "href": "https://colemilne54.github.io/fireship-threejs/",
         "image": "/threejs.svg",
         "classes": "px-12"
      },
   ],
   "projects": [
	{
		"title": "FighterLinks 🥊🥋🔗",
		"href": "https://fighterlinks.com"
	},
      {
         "title": "TrackMyApps.io 📝💸",
         "href": "https://trackmyapps.io/"
      },
      {
         "title": "Holistic Haven 🥊🧘‍🌎🐓",
         "href": "https://holistic-haven.colemilne.com/"
      },
      {
         "title": "Table Talk (Dinner Conversation Cards) 🍽️🗣️🃏",
         "href": "https://colemilne54.github.io/tabletalk/"
      },
      {
         "title": "Wordle Solver 📖🕵🏻‍♂️",
         "href": "https://colemilne54.github.io/nextjs-wordle-solver/"
      },
      {
         "title": "Housing Cost Calculator 🏠💵",
         "href": "https://colemilne54.github.io/housing-cost-calculator/"
      },
      {
         "title": "KinoKlicker 🎬👆",
         "href": "https://kino-klicker.vercel.app/"
      },
      {
         "title": "Laundry Care Symbols 🧺🫧",
         "href": "https://colemilne54.github.io/laundry-care-symbols/"
      },
      {
         "title": "Calculator Emporium 🧮",
         "href": "https://colemilne54.github.io/Calculator-Emporium/"
      },
      {
         "title": "GetSendy Media Form App 🎬🤳",
         "href": "https://app.getsendymedia.com/forms/get-sendy"
      },
      {
         "title": "DogDiscover 🐶🔍",
         "href": "https://react-nrhvby.stackblitz.io/"
      },
      {
         "title": "Infuriating Notepad 😡📝",
         "href": "https://react-hjyehn.stackblitz.io"
      },
      {
         "title": "Art Institute of Chicago Random Digital Museum 🖼",
         "href": "https://react-gmg2ge.stackblitz.io"
      }
   ]
}

export default data;
