# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Item attributes: name, price, description, url

Item.create([
  {name: "MacBook Air", price: "$1,300.00", description: "a laptop i can travel with", url: "https://www.apple.com/macbook-air/"},
  {name: "iPhone XS", price:"$730.00", description: "upgraded iPhone", url: "https://www.apple.com/iphone-xs/"},
  {name: "Sakura Pigma Micron pens", price: "$22.99", description: ".25 coloured pens & black", url: "https://www.amazon.com/Sakura-Pigma-Micron-Fineliner-drawing/dp/B07D5VHWHL/ref=sr_1_6?crid=RIFOZQWCWP4U&keywords=micron%2Bpens&qid=1562021529&s=gateway&sprefix=micron%2Caps%2C207&sr=8-6&th=1"},
  {name: "The Vegetarian Flavour Bible", price: "$12.99", description: "a book on how to build flavour", url: "https://www.amazon.com/dp/B00I8289AA/?coliid=I28OSAW35TCLTW&colid=12XY3BL9Q41JO&psc=0&ref_=lv_ov_lig_dp_it"}
])