# Topps Games
A RAWG api based app made for Topps as a test task. It's running live [here](https://topps-test-task.vercel.app/)

## Getting Started Locally

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:
```env
GOOGLE_CLIENT_ID=client_id_from_google_cloud_console
GOOGLE_CLIENT_SECRET=secret_key_from_google_cloud_console
RAWG_API_KEY=api_key_from_rawg
NEXTAUTH_SECRET=generate_with_a_command_below
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```
Command to generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Running Locally
1. Install dependencies:
```bash
bun install
# or
npm install
# or
yarn install
```

2. Run the development server:
```bash
bun dev
# or
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Decisions & Assumptions
- Use route handlers for RAWG api calls insted of direct calls. It allows to have more flexibility with caching and do data manipulation (e.g sorting, filtering, normalization) on the server side and cache results as well. Also routes can be potentially reused by another client.
- Present data in different views to demonstrate NextJS route techniques. Such as parallel routes that I see pretty powerful for complex ui.
- Avoid using state management libraries because data from api are cached and can be reused through the app. From the other hand there is not too much app specific data. Basically only diamonds which have their own hook. In case of more complex data Context API and/or IndexDB can be used.
- Use NextUI library for faster development and richer ui experience.

## Future Improvements
- Wrap route calls into helper functions to avoid code duplication.
- Improve api calls to use pagination and infinity scroll as ui solution.
- Write tests.
- Improve sidebar behavior in mobile view.
- Improve leaderboard to be more engaging. E.g. highlight top 3 players, how a user position, etc.
- Add more data to the game page and make it more fun.
