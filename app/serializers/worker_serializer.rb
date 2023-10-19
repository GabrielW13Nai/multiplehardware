class WorkerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :department
  belongs_to :manager
end
