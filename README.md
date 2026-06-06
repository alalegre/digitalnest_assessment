# Personal Linktree
A linktree-style react webpage created using Vite built for personal use and for DigitalNEST's technical assessment. This project utilized React MUI for its UI components and easy responsive design.



## Features
The linktree web app features a button that toggles between light and dark mode. Just click the button on the top right, and the colors change! This is persitent, even after a page refresh via `localStorage`. The reason why I picked this feature is because we often times scroll in the dark, so having darker colors in our screen help reduce the strain we get in our eyes. The tricky part in implementing this was making sure I properly use React's `useContext` so that I avoid prop drilling, saving me from headache and lines of code.

The second feature is click-to-copy. Each link card has a copy button on the right that lets you copy the URL straight to your clipboard. No need to open the link, copy it from the address bar, and then head back. Just click copy and you're done! The tricky part was that clicking the copy button was also triggering the card to open the link. The fix was simple though, just stopping the event from bubbling up to the parent with `e.stopPropagation()`.

## Quick Start
### Clone the repo
```
git clone git@github.com:alalegre/digitalnest_assessment.git
```

Then move into that folder and install npm

```
cd digitalnest_assessment
npm install
```

Once it finishes installing, you can then run the app:
```
npm run dev
```

## Dev Notes
As I was writing the `<LinkCard>` component, I noticed my initial solution was repetitive and inefficient. I asked Claude AI for a better approach, and it suggested using a lookup object (basically a dictionary) instead. Much cleaner.

Thinking of a design is also harder than I expected. I spent a good amount of time looking for inspiration before landing on something I liked. I went with a split layout: avatar, name, and bio on the left, then the cards on the right to make it feel a bit more unique than a typical linktree.

I also ran into a styling issue where the scrollbar was showing up on desktop even when there was nothing to scroll. My first instinct was `overflow: hidden` on the body, but that killed scrolling entirely. The fix was wrapping it in a media query so it only applies on larger screens.