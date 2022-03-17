## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Plan

![wireframes](/assets/wireframe.png)

## HTML Elements

- two sections or divs to split page into a left (player) and right (goblin) side
  - how? set each div or section to 50% width and use display:flex; for main
- three divs for the player side
  - why? one to show goblins defeated, one to show player hp, and another to show the player level (might combine with player hp div)
  - how? display: flex; to get divs in a nice order
- form to add goblins
  - includes input and button
- div for the goblin side
  - why? to hold the list of goblins

## Events

- user adds goblin (submit listener on a form)
  - gets name from form and make a new goblin object with given name (or random if no name is given) and a random hp
  - call renderGoblin to create a new div that is then appended to the goblin list div with displayGoblin
    - clear goblin list div and render and append all goblins in our array
- user clicks goblin to attack (list of clickables)
  - determine player hit/damage or miss and goblin hit/damage or miss (if goblin is defeated, then they can't attack)
  - update goblin/player hp state
  - update goblin emoji state depending on state of hp
  - update DOM to display new player and goblin state

## Order

- add html elements
- initial styling
- grab DOM elements
- initialize state
  - two default goblins
  - player stats
- declare renderGoblins function
- declare displayGoblins function
- add event listener for the form
- add event listener to clicking on goblins
- add additional stats to make game more complex
- any more styling needed
