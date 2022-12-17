# WantToDos

## [Link to WantToDos on Render](https://want-to-dos.onrender.com/)

## [User Guide](https://wanttodos.atlassian.net/wiki/spaces/WANTTODOS/pages/6553605/WantToDos+-+User+Guide)

WantToDo is an app for habits you want to form, or for the things that you’d like to do– that you have to squeeze in a little extra time for. Creating an account will allow you to keep all of the information you’ve gathered while using the app: notifications, followers, following, and WantToDos themselves. You can check out what tasks you want to do, like learning to paint or play the guitar, without also having to check deadlines or upcoming meetings– as you would on a traditional scheduler.

NOTE: It takes a while for render to start up so if you can't login instantly don't worry! Wait a 1-2 minutes and it will log you in :)

## [Features to test]

**Since our service has interactive features, and past notifications that you can't test with a brand new account or one account, you can use this test account below as well as making a new account:**

- Email: tiffany3123@gmail.com
- Password: password123@

1. Sign up, Login

- **Make sure when logging in, you click Remember Me. This will prevent you from getting logged out when you exit and reopen the window.**
- If you do not click Remember Me, it'll log you out and bring you back to the main page where you have to re-login.
- Even if you have clicked Remember Me, when you refresh the page, it'll still bring you back to the main page, but won't log you out, so you can continue using the product conveniently without having to log in again.

2-1. Calendar View

- You can view and add your wanttodos in the calendar view.
- Once you make a wanttodo and click the date, it'll show all your wanttodos.

2-2. List View

- You can view and add your wanttodos in the list-view.
- This page is mainly for the user to check what they need to do for today and tomorrow. (Therefore, it only shows the wanttodos you added specifically for today and tomorrow.

3. Add wanttodos

- You can add title, description (optional), startdate, repetition, category, invite friends.

3-1. Add wanttodos - Repetition

- On the add page, there are two sections related to repeating a wanttodo.
- Repetition is how many time you'll repeat a specific wanttodo.
- Repeat Type is choosing whether you want to repeat a specific wanttodo daily, weekly, or monthly.
  - Daily: It repeats how many days you choose.
    - (EX) Start date: Dec 14th, Repetition: 2 / Repeay Type: Daily, then there would be two items created for Dec 14th and Dec 15th.)
  - Weekly: It repeats weekly starting from the startdate.
    - (EX) Start date: Dec 14th, Repetition: 2 / Repeay Type: Weekly, then there would be two items created for Dec 14th and Dec 21st.)
  - Monthly: It repeats monthly starting from the startdate.
    - (EX) Start date: Dec 14th, Repetition: 2 / Repeay Type: Monthly, then there would be two items created for Dec 14th and Jan 14th.)
- Even if you mark a wanttodo for one day complete, it won't affect other days for that specific wanttodo.

3-2. Add wanttodos - Invite Friends

- You can invite your friends that you want to collaborate with to a wanttodo.
- Friends here means both users are following each other. Even if you follow user A, you won't be able to invite A unless A follows you as well. To prevent confusion, we implemented a function that only when both users follow each other, the name of the user appears on the list to invite other users.
- Once you invite another user, the same wanttodo will appear on another user's wanttodo list.

4. Delete wanttodos

- Users can also delete any wanttodos that they are no longer interested in.
- If you delete a wanttodo with repetition, it'll delete all at once for user's convenience.

5. Mark as complete wanttodos

- Users can mark a completed wanttodo by simply clicking the checkbox.
- Once the user clicks it, it'll also sort all wanttodos on the list, showing wanttodos that are still in progress first.

**Caution: You need to wait for several seconds to click complete and delete. Unless it might crash your server. Just wait for a bit to click complete or delete after clicking one another.**

6. Notifications

- There are two types of notifications
  1. Invite Notifications
     - Once your friend invites you to a wanttodo, a notification will be sent to the invited user.
  2. Follow Notifications
     - Once somebody follows you, a notification will be sent to the followed user.
- You can also see notifications from today and past.
  - This is for user's convenience to check the most recent notifications.

7. Profile

- You can see your profile with name, email, and profile bubbles with your initials.

7-1. Simple Analytics

- On your profile, you can see how many wanttodos you have created in total as well as how many you have completed and how many still in progress.

7-2. View Followers and Following

- Below the profile info, there are two buttons that would direct you to another page showing all your following and followers.
