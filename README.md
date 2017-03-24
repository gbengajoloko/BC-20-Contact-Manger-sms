# BC-20-Contact-Manager-sms
### Description

- ###### This app enables users to manage their contacts. It stores  contacts in an Sqlite Database. It can also be used to Send SMS to stored contacts.
 
# features
- Add a contact
- Delete a contact
- Send a stored contact a text message
- View all contacts
- Search for a specific number

###
Installation and setup
* Navigate to a directory of choice on terminal.
- Clone this repository on that directory.
  - `git clone https://github.com/gbengajoloko/BC-20-Contact-Manger-sms.git`

 - Run `npm install` to install dependencies

 - To add contacts run the command:

   - `node add -n <first name> <last name> -p <phone number>`

- To view Stored contacts run the command:

  - `node view`
 
- To search for contacts run the command:

   - `node search <name>`

- To delete contacts run the command:

  - `node delete <name>`

- TO send SMS Type the following then press enter:

  - `node text <name> -m 'message to be sent'`
- Run `node help` to view list of cammands.
### Contribute
- Fork this repository
- Clone it to your local machine
- Create a branch for the feature you want to implement
- Push your changes to your repository
- Submit a pull request

