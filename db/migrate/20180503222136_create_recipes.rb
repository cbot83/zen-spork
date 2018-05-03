class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.json :content
      t.text :note
      t.text :proto_url

      t.timestamps
    end
  end
end
