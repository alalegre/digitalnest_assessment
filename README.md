# Personal Linktree
A linktree-style react webpage created using Vite built for personal use and for DigitalNEST's technical assessment. This project utilized React MUI for its UI components and easy responsive design.



## Features
The linktree web app features a button that toggles between light and dark mode. Just click the button on the top right, and the colors change! This is persitent, even after a page refresh via `localStorage`. The reason why I picked this feature is because we often times scroll in the dark, so having darker colors in our screen help reduce the strain we get in our eyes. The tricky part in implementing this was making sure I properly use React's `useContext` so that I avoid prop drilling, saving me from headache and lines of code.

The second feature is click-to-copy. Each link card has a copy button on the right that lets you copy the URL straight to your clipboard. No need to open the link, copy it from the address bar, and then head back. Just click copy and you're done! The tricky part was that clicking the copy button was also triggering the card to open the link. The fix was simple though, just stopping the event from bubbling up to the parent with `e.stopPropagation()`.

## Quick Start
### Clone the repo
```
git clone <TBD>
```

Then move into that folder and install npm

```
cd ...
npm install
```

Once it finishes installing, you can then run the app:
```
npm run dev
```

## Dev Notes
As I was writing the `<LinkCard>` component, my idea was to conditionally render certain descriptions based on the parameter. But my initial solution was repetitive and inefficient, and I knew it could be better. So, I asked Claude AI if there's any way to make it more efficient, and it told me to use a lookup object instead, which is basically just a dictionary. This made the code cleaner.

Thinking of a design, even if it's simple, is hard for me. I find myself stuck for minutes trying to think and decide how things should look. I searched up some inspirations and found one that I think I liked. As I am writing this, my initial design was to split it in half vertically--where the avatar, name, and short bio are on the left, and the clickable cards are on the right. Now I'm thinking of changing the design to a horizontal split--where the avatar, name, and short bio are on top, and the clickable cards are bigger, have a short descriptions, and beneath the short bio. I wanted to make it a little more unique than a typical linktree where it's just a list of buttons, so I opted for a cooler yet simple design.

I had some issues with the styling for the responsiveness of the website. The scrollbar was visible even though there wasn't any extra content in the desktop view, so I did what I could to fix it on my own first. My initial solution was to do:

```
body {
    overflow: hidden;
}
```

but that got rid of ALL of the scrolling capabilities. I was stuck, so I asked Claude AI to help me debug this. The solution was to add in `App.css`:
```
@media (min-width: 1200px) {
  body {
    overflow: hidden;
  }
}
```