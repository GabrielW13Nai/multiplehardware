# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding"

4.times {
  Manager.create(name: Faker::Name.name, age:rand(40..60), branch: 'Dagoretti Corner')
}

5.times do
  Item.create(serial_number: rand(1..10000000), name: Faker::Construction.heavy_equipment, size: '1/2"', category: ['paints', 'brushes', 'equipment', 'Polypropylene(ppr)', 'Galvanised Iron (GI)'].shuffle.first, sub_category: ['gloss', 'matt', 'silk', 'bends', 'pipes', 'valves', 'N/A'].shuffle.first,
  item_number: rand(1..50), image: 'https://media.licdn.com/dms/image/C4E03AQGRHFW7tdEtRQ/profile-displayphoto-shrink_800_800/0/1652422835017?e=2147483647&v=beta&t=yLt2l7n1BSV-beHjH6cc3fm2Gtdjlt2JllKI--XACnM')
end




20.times do
  manager = Manager.order('RANDOM()').first
  Worker.create(
    name: Faker::Name.name,
    age: rand(20..60),
    department: ['sales', 'marketing', 'technical'].shuffle.first,
    manager_id: manager.id)


  worker = Worker.order('RANDOM()').first
  item = Item.order('RANDOM()').first

  3.times do
    ItemWorker.create(
      item_id: item.id,
      worker_id: worker.id
    )
  end
end




puts "Seeded.........."
