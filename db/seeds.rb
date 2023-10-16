# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding"

4.times {
  Manager.create(name: Faker::Name.name, age:rand(40..60), branch: ['Dagoretti Corner', 'Ngong'].shuffle.first)
}

10.times do
  Item.create(name: Faker::Construction.heavy_equipment, description: Faker::Lorem.sentence)
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
