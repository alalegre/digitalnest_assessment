# Personal Linktree
A linktree-style react webpage created using Vite built for personal use and for DigitalNEST's technical assessment. 



## Features

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


REQUIREMENTS IN THE README
- [ ] mention Vite
- [ ] usage of React MUI
- [ ] a few sentences of the JS feature
    - [ ] what it does
    - [ ] why i picked it
    - [ ] anything tricky
    - [ ] how it works