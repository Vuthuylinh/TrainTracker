# Train Tracker at TOMO Station

## Introduction:
  - A mean for clients to post a schedule a new train line with  constraints:
      - Name up to 4 characters (i.e. ‘LINH’, 'No1')
      - Specific to the minute the train arrive (i.e. ‘9:53 PM’)
  - A mean for clients to find the next time has mutiple trains arrive at the same time:
      - Specific time if current day still has remain time
      - Specific time of the first time available the next day if current day doesn't has remain time
      - No time if there are not time availble
  - A mean for clients to delete a train line schedule
## Demo
Youtube video:

## Getting started

1. Fork and clone this repo.
2. `npm install`.
3. Create `train-tracker` and `train-tracker-test` databases on PostgreSQL database.
4. Check out the starting seed file in `seed.js` - you can run it by executing `npm run seed`
5. Start the build process and your application with: `npm run start-dev`. If you're using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).
5. If you navigate to [localhost:8080](http://localhost:8080), you should see some UI already :)


## Tech Stack
 - React
 - Redux
 - Node.js
 - Express
 - Sequelize
 - PostgreSQL
