# TickTack

TickTack is a streamlined issue management app designed for agile teams. Effortlessly track, manage, and resolve issues with our intuitive interface, ensuring your projects stay on course and your team remains productive. Built with Next.js.

## Features

- Intuitive Interface: Easy-to-use dashboard for a clear overview of all issues.
- Customizable Workflows: Adapt TickTack to fit your team's unique processes.
- Priority Levels: Assign priority levels to tickets to ensure critical issues are addressed promptly.
- Progress Tracking: Monitor the status of each ticket with clear progress indicators.
- Timestamps: Keep track of when tickets are created, updated, and resolved with automatic timestamps.

## Installation

**You can access an open-access instance of TickTack at [ticktacktrack.vercel.app](https://ticktacktrack.vercel.app).**

To host a local instance of TickTack, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/shrysjain/ticktack.git
cd ticktack
```

_Alternatively, clone via SSH, the GitHub CLI, or GitHub Desktop_

2. Install dependencies:

```sh
npm install
```

3. Create a MongoDB Atlas cluster and add `MONGODB_URI` to your `.env.local` file

4. Run the application

```sh
npm run dev
```

5. Open your web browser and go to `http://localhost:3000`. Enjoy!

## Contributing

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

4. Push to the branch

```bash
git push origin feature/your-feature
```

5. Open a pull request

## Licensing

This project is licensed under the MIT license - see the [LICENSE](./LICENSE) file for details.
