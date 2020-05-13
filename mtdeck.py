import urllib.request
import pyto_ui as ui
import pyto_core
import os
import sys

requirements = {'mtdeck.user.js': 'https://raw.githubusercontent.com/Compeito/MTDeck/master/dist/mtdeck.user.js',
                'mtdeck4ios.user.js': 'https://raw.githubusercontent.com/nakano57/mtdeck-for-ios/master/dist/mtdeck4ios.user.js'}


def update_all():
    for name, url in requirements.items():
        dl_js(name, url)


def dl_js(name, url):
    urllib.request.urlretrieve(url, name)


def userjs(sender):
    for name, url in requirements.items():
        if os.path.isfile(name) == False:
            dl_js(name, url)
        with open(name, 'r') as f:
            js = f.read()
            sender.evaluate_js(js)


def opener(sender):
    print(sender.url)
    
    
def close_button(sender):
    sender.superview.close()


update_all()

v = ui.View()
v.navigation_bar_hidden = True

w = ui.WebView('https://tweetdeck.twitter.com')
w.background_color = ui.Color.rgb(31, 41, 55, 1)
w.did_start_loading = userjs
w.did_fail_loading = opener
w.size = (v.width, v.height)
w.flex = [ui.FLEXIBLE_HEIGHT]
w.content_mode = ui.CONTENT_MODE_SCALE_ASPECT_FILL

b = ui.Button(title="×")
b.size = (50, 50)
b.font.with_size(ui.FONT_BUTTON_SIZE*2)
b.center = (v.width/6*5, v.height/10)
b.content_mode = ui.CONTENT_MODE_TOP_RIGHT
b.action = close_button

v.add_subview(w)
v.add_subview(b)
ui.show_view(v, ui.PRESENTATION_MODE_FULLSCREEN)
pyto_core.startup_script()
