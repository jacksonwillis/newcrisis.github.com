require 'rubygems'
require 'haml'
require 'sass'

def render_files

File.open('index.html', 'w') { |f|
  f << Haml::Engine.new(File.read('lib/index.haml'), :format => :html5).render }

File.open('src/style.css', 'w') { |f|
  f << Sass::Engine.new(File.read('lib/style.sass')).render }

puts "Render complete!"

end

if __FILE__ == $0 && (/-l|--loop/.match ARGV.join(' '))
  loop { render_files }
else
  render_files
end
