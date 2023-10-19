class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age
  has_many :workers
  # attribute :tutorial_complete, if: :recently_added?
  # def recently_added?
  #   Date.today.prev_month < object.created_at?
  # end
end
