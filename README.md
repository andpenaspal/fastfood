# Fast Food Programming Test

## (a) Requirements:

- Clean, commented code
- Good coding practise
- Industry accepted, reusable, flexible and maintainable code
- DEADLINE: maximum 1 week for the ideal deliverable

## (b) Questions:

- Maximum 3 questions, regarding the business spec below, will be answered per candidate

## (c) The Test (Business Specification):

You need to create 3 Franchise Fast Food Restaurants:

- Blue Lagoon Munch Hut
- Fast Food On Time
- More Than Cow Yummy Chow

You'll have 3 types of Orders:

- Type A: over the counter orders (walk-in basically)
- Type B: drive through
- Type C: delivery via phone orders

Each restaurant will provide different Order Types:

- Blue Lagoon Munch Hut: Type A
- Fast Food On Time: Type A + B
- More Than Cow Yummy Chow: Type A + B + C

You'll have 3 Fast Food Types:

- Salads (6 ingredients listed elsewhere in this document)
- Burgers (5 ingredients listed elsewhere in this document)
- Sandwiches (7 ingredients listed elsewhere in this document)

From the onset, each Restaurant will only cater for a single Food Type:

- Blue Lagoon Munch Hut: Salads
- Fast Food On Time: Sandwiches
- More Than Cow Yummy Chow: Burgers

After each order has been assembled the stock levels must be checked.  
The type of restaurant and ingredient will determine the minimum stock
level of an ingredient before an order has to be placed.

(in brackets the first number = minimum stock level; second number = maximum stock level):

- Salads
  - Avo (10; 210)
  - Lettuce (12; 230)
  - Olive (10; 220)
  - Gherkin (8; 250)
  - Onion (14; 240)
  - Cucumber (9; 220)
- Burgers
  - Onion (22; 240)
  - Cheese (20; 230)
  - Gherkin (15; 220)
  - Lettuce (18; 240)
  - Patty (20; 210)
- Sandwiches
  - Avo (8; 240)
  - Lettuce (10; 230)
  - Olive (8; 240)
  - Gherkin (7; 250)
  - Onion (12; 230)
  - Cucumber (9; 210)
  - Cheese (16; 190)

Note that when an item is ordered, and such an order will decrease
the stock below the minimum allowed level, only then should the
maximum stock level be replenished.

The menus as follows (in brackets the number of stock items used):

- Salads
  - Salad 1 (Avo=1; Lettuce=2; Olive=7; Gherkin=1; Onion=1; Cucumber=1)
  - Salad 2 (Avo=1; Lettuce=2; Olive=7; Gherkin=2; Onion=1; Cucumber=1)
  - Salad 3 (Avo=2; Lettuce=2; Olive=8; Gherkin=2; Onion=1; Cucumber=1)
  - Salad 4 (Avo=2; Lettuce=3; Olive=8; Gherkin=3; Onion=1; Cucumber=2)
  - Salad 5 (Avo=2; Lettuce=3; Olive=9; Gherkin=3; Onion=2; Cucumber=2)
  - Salad 6 (Avo=3; Lettuce=3; Olive=9; Gherkin=4; Onion=2; Cucumber=2)
- Burgers
  - Burger 1 (Onion=1; Cheese=1; Gherkin=1; Lettuce=1; Patty=1)
  - Burger 2 (Onion=1; Cheese=2; Gherkin=2; Lettuce=1; Patty=1)
  - Burger 3 (Onion=1; Cheese=3; Gherkin=3; Lettuce=2; Patty=1)
  - Burger 4 (Onion=1; Cheese=4; Gherkin=4; Lettuce=2; Patty=2)
  - Burger 5 (Onion=2; Cheese=5; Gherkin=5; Lettuce=3; Patty=2)
- Sandwiches
  - Sandwich 1 (Avo=1; Lettuce=1; Olive=4; Gherkin=1; Onion=1; Cucumber=1; Cheese=1)
  - Sandwich 2 (Avo=1; Lettuce=1; Olive=4; Gherkin=1; Onion=1; Cucumber=1; Cheese=1)
  - Sandwich 3 (Avo=1; Lettuce=1; Olive=5; Gherkin=1; Onion=1; Cucumber=1; Cheese=1)
  - Sandwich 4 (Avo=1; Lettuce=1; Olive=5; Gherkin=1; Onion=1; Cucumber=2; Cheese=2)
  - Sandwich 5 (Avo=2; Lettuce=2; Olive=6; Gherkin=2; Onion=1; Cucumber=2; Cheese=2)
  - Sandwich 6 (Avo=2; Lettuce=2; Olive=6; Gherkin=2; Onion=2; Cucumber=2; Cheese=3)
  - Sandwich 7 (Avo=2; Lettuce=2; Olive=7; Gherkin=2; Onion=2; Cucumber=2; Cheese=4)

A customer should randomly choose:

- which restaurant they are visiting
- any one of the supported order types of the chosen restaurant
- the item they are ordering from the menu

The program must exit when every order type (or remaining order type) of every restaurant has delivered at least 1000 successful orders.

Note that the duration of every order being processed/assembled will be simulated by a timer in the form of a random counter between 1 - 100.

Every duration that lands in the 1 - 10 range will be treated as an unsuccessful order i.e. customer is unhappy with the service & leaves.

The delivery order type (Type C) will still be valid if this value falls in the 1 - 50 range, due to the fact that the order must be delivered to the customer.

In summary:

Type A & B failure = 1 - 10

Type C failure = 51 - 100

Additional market requirement for the "Fast Food On Time" restaurant:

Which ever order type reaches 500 successful orders first, the other order type will not form part of their business anymore, but only if it reached 450 orders or less.

The output must show:

- The successful orders of all the restaurants (sorted by top restaurant listed first).
- The failed/unsuccessful orders of all the restaurants (sorted by top restaurant listed first).

Also show per restaurant the number of successful orders per order type (again sorted by the top
order type listed first) and the number of stock items used and re-ordered.

Below is a rough output example. Formatting can be customised.

==========================>

Successful orders:

- More Than Cow Yummy Chow (3000)
- Fast Food On Time (2098)
- Blue Lagoon Munch Hut (1201)

Unsuccessful orders:

- More Than Cow Yummy Chow (320)
- Fast Food On Time (183)
- Blue Lagoon Munch Hut (71)

Order Types:

- More Than Cow Yummy Chow
  - Order Type A (1100)
  - Order Type B (1000)
  - Order Type C (9000)
- Fast Food On Time
  - Order Type A (1098)
  - Order Type B (1000)
- Blue Lagoon Munch Hut
  - Order Type A (1201)

Stock items (Used | Reordered):

- Blue Lagoon Munch Hut
  - Avo (873 | 801)
  - Lettuce (873 | 801)
  - Olive (873 | 801)
  - Gherkin (873 | 801)
  - Onion (873 | 801)
  - Cucumber (873 | 801)
- More Than Cow Yummy Chow
  - Onion (873 | 801)
  - Cheese (873 | 801)
  - Gherkin (873 | 801)
  - Lettuce (873 | 801)
  - Patty (873 | 801)
- Fast Food On Time
  - Avo (873 | 801)
  - Lettuce (873 | 801)
  - Olive (873 | 801)
  - Gherkin (873 | 801)
  - Onion (873 | 801)
  - Cucumber (873 | 801)
  - Cheese (873 | 801)

<==========================

## (d) Advanced Candidates [Technology Requirements]:

The following technologies _must_ be applied by senior candidates and optionally by less senior candidates wanting to impress:

- Use Jboss JMX Console to start & stop the program
- Save variables (e.g. menus, stock levels) in Hypersonic SQL database via Hibernate
- Use Spring as IOC container
- Use Hibernate as persistence layer
- Use EJB3 stateless session facade as entry point
- Results must be persisted to the database via Hibernate
- Results must be retrieved from the database via Hibernate
- Other i.e. add any other technology that you feel might add value
