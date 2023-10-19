class Manager < ApplicationRecord
  has_many :workers
  validates :name, presence: true

  def county
    if "#{branch}" == "Dagoretti Corner"
      location = "Nairobi"
    elsif "#{branch}" == "Ngong"
      location = "Kajiado"
    else
      location = "Not available"
      "#{location}"
    end
  end
end
