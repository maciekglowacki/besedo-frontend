## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/maciekglowacki/besedo-frontend

# Go into the repository
$ cd besedo-frontend

# If you don't have yarn
$ npm install --global yarn

#Check that Yarn is installed by running:
$ yarn --version

# Install dependencies
$ yarn

# Run the app
$ yarn start

# Build the app for production
$ NODE_ENV=production yarn build

# Run tests
$ yarn test
```

## Backend setup

1. Go to https://github.com/Besedo/frontend-test-data and download the repository as a zip file. 
   
2. Unzip the downloaded file.

3. Run the API server (requires JAVA 8 runtime):

```
java -jar user-db.jar
```

4. Fetch the list of users to verify that the server is up and running:

```
curl http://localhost:8181/users
```
5. See `swagger.yaml` for API documentation