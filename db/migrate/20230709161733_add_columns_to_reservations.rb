class AddColumnsToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :reserve_days, :integer, default: 1
    add_column :reservations, :total_amount, :float, default: 0.0
  end
end
