import random

first_names = ["James", "William", "Oliver", "Jack", "Noah", "Thomas", "Lucas", "Liam", "Ethan", "Alexander", "Henry", "Samuel", "Sebastian", "Harrison", "Benjamin", "Charlotte", "Olivia", "Amelia", "Isla", "Mia", "Ava", "Grace", "Willow", "Harper", "Chloe", "Sophie", "Evie", "Emily", "Matilda", "Ruby", "John", "David", "Michael", "Peter", "Paul", "Mark", "Andrew", "Simon", "Matthew", "Luke", "Sarah", "Emma", "Jessica", "Amanda", "Rachel", "Nicole", "Lisa", "Michelle", "Rebecca", "Lauren", "Lachlan", "Callum", "Connor", "Angus", "Hamish", "Declan", "Darcy", "Flynn", "Fletcher", "Finn", "Maddison", "Tayla", "Georgia", "Chelsea", "Imogen", "Ebony", "Tahlia", "Hayley", "Abbey", "Holly"]
last_names = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "Morton", "White", "Martin", "Anderson", "Thompson", "Nguyen", "Thomas", "Walker", "Harris", "Lee", "Ryan", "Robinson", "Kelly", "Murphy", "O'Connor", "Campbell", "Stewart", "Bell", "Roberts", "Edwards", "Evans", "Clarke", "Macdonald", "Harrison", "Gibson", "Marshall", "Stevens", "Ward", "Cox", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Hughes", "Price", "Sanders", "Patel", "Ross", "Russell", "Henderson", "Ford", "Hamilton", "Graham", "Reynolds", "Ellis", "Wallace", "Murray", "Cole", "West", "Woods", "Kennedy", "Wells", "Tucker", "Harrison", "Dixon", "Burns", "Gordon", "Crawford"]

locations = ["Brisbane CBD", "Indooroopilly", "St Lucia", "Toowong", "Teneriffe", "New Farm", "Paddington", "South Bank", "West End", "Kelvin Grove", "Fortitude Valley", "Ascot", "Hamilton", "Newstead", "Wynnum", "Manly", "East Brisbane", "Norman Park", "Brookfield", "Pullenvale"]

services = ["MacBook Pro Repair", "Data Recovery", "Laptop Screen Replacement", "Battery Replacement", "PC Cooling Fan Repair", "IT Support", "Virus Removal", "Logic Board Repair", "Water Damage Repair", "Gaming PC Setup"]

adjectives = ["fast", "quick", "same day", "reasonable", "affordable", "down to earth", "honest", "reliable", "expert", "professional", "transparent", "efficient", "friendly", "super quick", "brilliant"]

templates = [
    "Got my {service} done here. Absolutely {adj}, highly recommend these guys in {location}.",
    "I was looking for {adj} {service} around {location} and found this shop. They did not disappoint. The pricing was {adj2} and they fixed it {adj3}.",
    "My laptop died right before exams. Dropped it off at Indooroopilly. The team was incredibly {adj} and {adj2}. Best {service} in Brisbane.",
    "Brought in my device for {service} after spilling water on it. Honestly, they are {adj} and very {adj2}. Fixed {adj3}. Thank you!",
    "Super {adj} turnaround. I needed {service} for my business in {location}. They were {adj2} and very {adj3}.",
    "If you need {service} in {location}, don't go anywhere else. {adj} service, totally {adj2} pricing. Really {adj3} guys.",
    "Very {adj} and {adj2} team. Had a massive issue requiring {service}. They resolved it {adj3}. 5 stars.",
    "I rarely leave reviews but their {service} was exactly what I needed. Very {adj}, {adj2} prices. Better than taking it to the official store.",
    "Excellent experience. The {service} was done {adj}. I live in {location} and the drive to their workshop was worth it. {adj2} and {adj3} techs.",
    "100% {adj}. Needed {service} urgently in {location}. They came out same day, very {adj2}. Great job.",
    "The most {adj} tech support I've ever used. Needed {service} and they sorted it out {adj2}. Really {adj3} approach.",
    "Fantastic {service}. I was quoted double somewhere else. These guys are {adj} and {adj2}. Highly recommended to anyone in {location}.",
]

output = []
output.append('export const testimonials = [')
for i in range(1, 101):
    first = random.choice(first_names)
    last = random.choice(last_names)
    name = f"{first} {last}"
    loc = random.choice(locations)
    service = random.choice(services)
    
    adj1 = random.choice(adjectives)
    adj2 = random.choice(adjectives)
    adj3 = random.choice(adjectives)
    while adj1 == adj2 or adj2 == adj3 or adj1 == adj3:
        adj2 = random.choice(adjectives)
        adj3 = random.choice(adjectives)
        
    template = random.choice(templates)
    content = template.format(service=service, location=loc, adj=adj1, adj2=adj2, adj3=adj3)
    
    rating = 5 if random.random() > 0.1 else 4
    
    output.append("  {")
    output.append(f"    id: {i},")
    output.append(f"    name: \"{name}\",")
    output.append(f"    location: \"{loc}\",")
    output.append(f"    service: \"{service}\",")
    output.append(f"    content: \"{content}\",")
    output.append(f"    rating: {rating},")
    output.append("  },")

output.append('];')

with open("src/app/testimonials/data.ts", "w") as f:
    f.write('\n'.join(output))
