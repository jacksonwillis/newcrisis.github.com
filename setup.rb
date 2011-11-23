require 'rubygems'
require 'haml'
require 'sass'

$r = 0

def render_files

$r += 1

File.open('index.html', 'w') { |f|
  f << Haml::Engine.new(File.read('lib/index.haml'), :format => :html5).render }

File.open('src/css/style.css', 'w') { |f|
  f << Sass::Engine.new(File.read('lib/style.sass')).render }

puts "Render complete! (#{$r.to_s.ljust(4)})\e[1F"

end

if __FILE__ == $0 && (/-l|--loop/.match ARGV.join(' '))
  loop { render_files; sleep 2 }
else
  render_files
end
