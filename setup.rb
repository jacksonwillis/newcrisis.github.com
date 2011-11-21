require 'rubygems'
require 'haml'
require 'sass'

File.open('index.html', 'w') { |f|
  f << Haml::Engine.new(File.read('index.haml'), :format => :html5).render }

File.open('style.css', 'w') { |f|
  f << Sass::Engine.new(File.read('style.scss')).render }

