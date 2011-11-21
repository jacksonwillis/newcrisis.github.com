require 'rubygems'
require 'haml'
require 'sass'

File.open('index.html', 'w') { |f|
  f << Haml::Engine.new(File.read('lib/index.haml'), :format => :html5).render }

File.open('src/style.css', 'w') { |f|
  f << Sass::Engine.new(File.read('lib/style.sass')).render }

