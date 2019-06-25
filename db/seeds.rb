# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

image_urls = [
  "https://tractive.com/static/images/product-images/tratr3g/tractive-gps-3g-dogtracker-dalmatian-dog.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/220px-Oryctolagus_cuniculus_Tasmania_2.jpg",
  "https://static01.nyt.com/images/2018/02/06/science/01TB-WHALES1/merlin_133145189_6e1ccdf8-f1fc-4eb6-a785-ed1e6bc6a7f2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  "https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/10087/170424_Dolphin2_Thumb.jpg",
  "https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg",
  "https://www.telegraph.co.uk/content/dam/pets/2016/08/11/103675361_jack-the-goat-PETS_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=450",
  "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg",
  "https://fh-sites.imgix.net/sites/1418/2017/04/25154303/snorkeling-with-sea-turtles.jpg?auto=compress%2Cformat&w=1000&h=1000&fit=max",
  "https://a-z-animals.com/media/animals/images/original/sea_lion10.jpg",
  "https://www.660citynews.com/wp-content/blogs.dir/sites/8/2018/09/08/HAL500497697_hd.jpg",
  "https://i2.wp.com/fbresearch.org/wp-content/uploads/2018/04/Rhino.jpg?resize=1080%2C675&ssl=1",
  "http://joemiller.us/wp-content/uploads/hawk-2714674_960_720.jpg",
  "https://www.tn.gov/content/dam/tn/twra/images/red-tailed-hawk-009.jpg",
  "https://www.nps.gov/articles/images/Image-w-cred-cap_-1200w-_-Brown-Bear-page_-brown-bear-in-fog_2_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
  "https://www.telegraph.co.uk/content/dam/Travel/2018/November/lion%20cover.jpg?imwidth=450",
  "https://i2.wp.com/fbresearch.org/wp-content/uploads/2018/04/Rhino.jpg?resize=1080%2C675&ssl=1",
  "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2561,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1494008886/articles/2017/04/03/the-internet-s-most-famous-pregnant-giraffe-still-hasn-t-given-birth/170403-jones-pregnant-giraffe-tease_alsbhr",
  "https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/880/1x/cbbc/happy-penguin2.jpg",
  "http://cryptocapers.com/wp-content/uploads/2018/07/bull-023.jpg",
  "https://www.sciencenews.org/sites/default/files/2019/03/main/articles/033019_SZ_reviews_feat.jpg"
]

image_urls.each do |imageurl|
  ImageUrl.create!(url: imageurl)
end
