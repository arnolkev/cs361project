# cs361project

# Angular client app instructions
Install NodeJS first and navigate to client directory. Then run these commands:
`npm install -g @angular/cli`
`cd client`
`npm install`
`ng serve`

The app is now running on http://localhost:4200/


# Running unit tests
`cd client`
`ng test`


# Publishing to Github Pages instructions

Create a repository named `<your_github_username>.github.io`
Clone the new repository.
In the ./client folder, run `ng build --prod --base-href "https://<your_github_username>github.io/"`
Copy the contents of ./client/dist/ folder into your newly cloned github repo. 
Push the changes.
The app is now available at https://<your_github_username>.github.io/

More details here: https://pages.github.com