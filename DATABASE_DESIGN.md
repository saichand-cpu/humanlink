# HumanLink Database Design

Version: 0.4.0

---

# Main Tables

## Users
- User ID
- Full Name
- Username
- Email
- Mobile Number
- Password
- Profile Photo
- Bio
- Location
- Reputation Points
- Verification Status
- Account Type
- Created At

---

## Posts

- Post ID
- User ID
- Content
- Images
- Videos
- Likes
- Comments
- Shares
- Visibility
- Created At

---

## Comments

- Comment ID
- Post ID
- User ID
- Comment
- Created At

---

## Help Requests

- Request ID
- User ID
- Title
- Description
- Category
- Priority
- Location
- Status
- Assigned Helper
- Created At

---

## Businesses

- Business ID
- Business Name
- Owner
- Category
- Address
- Subscription Plan
- Verification Status

---

## NGOs

- NGO ID
- NGO Name
- Registration Number
- Address
- Volunteers
- Campaigns

---

## Volunteer Groups

- Group ID
- Group Name
- Members
- Events
- Certificates

---

## Messages

- Message ID
- Sender
- Receiver
- Message
- Media
- Timestamp

---

## Notifications

- Notification ID
- User ID
- Type
- Message
- Read Status

---

## Payments

- Payment ID
- User
- Plan
- Amount
- Payment Status
- Transaction ID

---

## AI

- AI Chat History
- AI Suggestions
- AI Generated Requests

---

Status:
Planning
