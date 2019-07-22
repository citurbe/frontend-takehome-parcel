# Teachable frontend takehome for Craig Iturbe

To get this project up and running, type:

```bash
npm install
```

Then type:

```bash
npm run dev
```

To run the test, type:

```bash
npm run test
```

### Some thoughts on the architecture

For this project, I elected not to use Redux or any other state management package. The project is straightforward enough that React's component state is more than sufficient, and I like to avoid installing dependencies before I need them.

I separated all of the api call functionality into a separate folder, and wrote a function to handle the api call itself. This is on the assumption that we might want to add more api functionality later, and so it made sense to abstract that functionality from the beginning (especially since it does not require any unneccessary dependencies).

Pulling the function that handles saving and unsaving gems into a utility folder is probably not necessary for a project of this size. However, by separating the function from the React infrastructure, I was able to test it much more easily. This is important, since that function really represents most of the testable functionality of this App.
