# ***CampQuest***

## ***Table of Contents***

1. Overview

2. Product Spec

3. Wireframes 

# ***Overview***

## ***Description***
CampQuest is a college campus event website that allows users to browse, create and promote local college events around the United States. This website will enable students, alums, and their families to find events easily, have fun with their friends, potentially meet new friends, and make new everlasting memories.


## ***Website Evaluation***

1. Category: Entertainment/Lifestyle 

2. Story: Uses the user’s search query to connect them to their desired college/university’s future events. Users can select the event they are interested in and see its vital details, such as time, location, and host. 

3. Market: Any individual can use this website. 

4. Habit: Users can use this website as frequently as they want to browse, create and promote local college events. 

5. Scope: First, we read the college/university the user types in the search bar, then provide a list of future events for that particular campus. Immense potential for use with universities in the United States.

# ***Product Spec***

***1. User Stories (Required and Optional)***

## ***Optional User Stories:***

**User Story 1**

Title: User picks which U.S. college/university they want to see events for

User Story: As a user, I want to have the ability to search for any college or university in the United States, so I can see what events are happening currently and in the future.

Acceptance Criteria: Given I am a user (guest or registered), when I type in the name of my desired college/university, then the name of the school will appear, allowing me to click it and view all future events.

**User Story 2**

Title: User gets directions to the event location.

User Story: As a user, I want to see the location of the event I’m interested in, so I can know exactly where to be when the event starts.

Acceptance Criteria: Given I am a user (guest or registered), when I click on my desired school event, then the event’s location will appear, allowing me to copy the address and successfully navigate there.

**User Story 3**

Title: User contacts customer support.

User Story: As a user, I want to be able to contact the customer support line so I have any of my questions or concerns about the website answered.

Acceptance Criteria: Given I am a user (guest or registered), when I click on the “Contact Us” page, then CampQuest’s customer support phone number and email address will appear, allowing me to get assistance through whichever way I choose.

**User Story 4**

Title: User adds college to favorites list

User Story: As a registered CampQuest user, I want to have the ability to add specific colleges or universities to my favorites list, so I can quickly see the events from the campuses I favor.

Acceptance Criteria: Given I am a registered CampQuest user, when I press on my favorites list, then I will be presented with the list of colleges/universities I favorited and the ability to click on each one to see each campus’s events.  

**User Story 5**

Title: User purchases event tickets

User Story: As a user, I want to purchase event tickets through the website, so I can find and buy on CampQuest alone rather than finding on CampQuest and purchasing the tickets on an external site.

Acceptance Criteria: Given I am a user (guest or registered), when I click on “Buy Tickets” for a particular event, then the website will take me through a checkout process where I add the number of tickets to my cart and purchase the tickets with a debit or credit card. 


## ***Required User Stories:***
 
 
**User Story 1**

Title: User logs into the website

User Story: As a registered CampQuest user, I want to log in with my username and password so the system can authenticate me.

Acceptance Criteria: Given that I am a logged-out registered user, when I go to the login page and log in using my username and password, then my user data should be available. 

**User Story 2**

Title: User creates an account on the website.

User Story: As a new CampQuest user, I want to register by creating a username and password so the system can remember me and my data and grant me access to member-only features such as a favorites list.

Acceptance Criteria: Given that I am a new user, when I press on either the sign-up tab or the “Create account” button on the login page, then I will be able to successfully register myself by signing up with a username and password, enabling me to log in with my chosen credentials in the future.

## ***     ***


***2. Screens:***

Login – Registered users sign into their accounts. Unregistered users on this page can either create a new account or continue as a guest.

Sign Up – User registers to become a CampQuest member.

Search – Users (guest or registered) can search for a college or university using the search bar.

Contact Us – Users (guest or registered) can contact the customer support line if they have any problems, questions, or concerns with the website. Users can also contact the website owners by filling out a form.

About Us – Users (guest or registered) can read about CampQuest’s purpose and what you can find as you explore the website. 


***3. Navigation:***

***Guest User Tab Navigation:***

⋅ Sign Up 

⋅ Login 

⋅ Search 

⋅ Contact Us 

⋅ About Us 


***Registered User Tab Navigation:*** 

⋅ Search 

⋅ Contact Us 

⋅ About Us 

⋅ Favorites (Optional) 



# ***WireFrame***
![Document_2023-02-15_031612](https://user-images.githubusercontent.com/115364128/218971272-6de658a0-2e6f-4cd9-86de-8f7bcbf3166b.jpg)







# ***Digital WireFrame***
![IMG_3583](https://user-images.githubusercontent.com/115364128/218964481-18f5d9ed-4a1a-4877-a468-ccd11090da9e.png)
![IMG_8726](https://user-images.githubusercontent.com/115364128/218961650-2cd880d9-05bf-4b5c-98a0-0e76a967fadb.png)
![IMG_3663](https://user-images.githubusercontent.com/115364128/218964539-96304065-d66b-4263-90b4-d87af966fc14.png)
![IMG_2986](https://user-images.githubusercontent.com/115364128/218961739-a08a09ff-a70d-45f3-9027-490ef65d28ea.png)
![IMG_2824](https://user-images.githubusercontent.com/115364128/218961822-ef2506de-3b93-43d7-83cf-65512ffd98f6.png)
![CampQuest (2)-min](https://user-images.githubusercontent.com/115364128/218962593-2dd62e68-7fbc-45fe-93c7-3804651bb81a.png)

## ***Schema***

### ***Model***

***Model 1: Search***

| Property    | Type    | Description                |
|-------------|---------|----------------------------|
| CollegeName | String  | Name of college/university |
| State       | String  | Name of State              |
| ZipCode     | Integer | Zip Code                   |
| County      | String  | Name of County             |

***Model 2: Event***

| Property       | Type      | Description                |
|----------------|-----------|----------------------------|
| EventName      | String    | Name of Event              |
| EventAddress   | String    | Location of Event          |
| UniversityName | String    | Name of College/University |
| EventDate      | Timestamp | Event's Date               |

***Model 3: User***

| Property       | Type      | Description                   |
|----------------|-----------|-------------------------------|
| FirstName      | String    | User’s first name             |
| LastName       | String    | User’s last name              |
| UniversityName | String    | Name of College/University    |
| Email          | String    | User’s email                  |
| City           | String    | User’s city                   |
| CreatedAt      | Timestamp | Time of account creation      |
| LastLogin      | Timestamp | Time that user last logged in |


### ***Networking***

### ***List of network requests by tabs***

| Search Tab | Description                                     |
|------------|-------------------------------------------------|
| Read/GET   | Query all college universities names            |
| Read/GET   | Query all college universities names            | 
| Read/GET   | Query the state the college/university is in    |
| Read/GET   | Query the zip code the college/university is in | 
| Read/GET   | Query the county the college/university is in   | 

| Sign Up Tab | Description          |
|-------------|----------------------|
| Create/POST | Create a new account |

| Account Tab | Description                 |
|-------------|-----------------------------|
| Read/GET    | Query logged in user object |
| Update/PUT  | Update user profile image   | 
| Update/PUT  | Update user email           |
| Delete      | Delete existing account     | 

| Event Tab | Description                     |
|-----------|---------------------------------|
| Read/GET  | Query in events name            |
| Read/GET  | Query logged in events address  |
| Read/GET  | Query logged in university name | 
| Read/GET  | Query logged in event’s date    | 

## ***IF EXISTS*** EXISTING API ENDPOINTS

1. EVENT API ENDPOINTS

* Base URL: http://localhost:8080/api

| HTTP Verb | Endpoint         | Description                                 |
|-----------|------------------|---------------------------------------------|
| GET       | /event           | Retrieves all events                        |
| GET       | /event/{eventId} | Retrieves a specific event based on it's ID |
| POST      | /event           | Creates a new event                         |
| PUT       | /event/{eventId} | Updates an event based on it's ID           |
| DELETE    | /event/{eventId} | Deletes an event based on it's ID           |

2. USER API ENDPOINTS

* Base URL: http://localhost:8080/api

| HTTP Verb | Endpoint       | Description                                |
|-----------|----------------|--------------------------------------------|
| GET       | /user          | Retrieves all users                        |
| GET       | /user/{userId} | Retrieves a specific user based on it's ID |
| POST      | /user          | Creates a new user                         |
| PUT       | /user/{userId} | Updates a user based on it's ID            |
| DELETE    | /user/{userId} | Deletes a user based on it's ID            |

## ***Models/Controller/Services Done***
1.User Model, User Controller, User Service

2.Event Model, Event Controller, User Controller

3.College Model

## ***User Stories Completed***

Required Stories

1.

2.

3.

Optional Stories

1. User Story: As a user, I want to see the location of the event I’m interested in, so I can know exactly where to be when the event starts.

2. User Story: As a user, I want to purchase event tickets through the website, so I can find and buy on CampQuest alone rather than finding on CampQuest and purchasing the tickets on an external site.

3. User Story: As a user, I want to be able to contact the customer support line so I have any of my questions or concerns about the website answered.


## ***GIF Upates of Projects Gif***

1.Milestone 3

![Milestone 3](https://user-images.githubusercontent.com/110430142/222097169-29107fd5-9822-4344-93dc-7234a3181ac5.gif)



2. Milestone 4

![Milestone 4](https://user-images.githubusercontent.com/110430142/223641300-93e72ab6-5c14-42c7-a6d2-b036a37f25ab.gif)


3.Milestone 5

![Milestone 6](https://user-images.githubusercontent.com/110430142/225540066-c0431ee7-6138-4f6a-bbc2-89c2de6ef7d1.gif)


4. Milestone 6

![Milestone 7](https://user-images.githubusercontent.com/110430142/228693485-73f29aba-e3d3-494b-b5f3-be3e2a51be8e.gif)



