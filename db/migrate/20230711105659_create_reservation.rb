class CreateReservation < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.date :reservation_date
      t.date :due_date
      t.integer :reserve_days
      t.integer :total_amount
      t.references :car, null: false, foreign_key: true
      t.references :reservations, :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
