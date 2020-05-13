import urllib.request
import pyto_ui as ui
import os
import sys


def dl_js():
    url = 'https://raw.githubusercontent.com/Compeito/MTDeck/master/dist/mtdeck.user.js'
    urllib.request.urlretrieve(url, 'mtdeck.user.js')


def userjs(sender):
    requirements = ['mtdeck.user.js', 'unzoom.js']
    for file in requirements:
        if os.path.isfile(file) == False:
            dl_js()
        with open(file, 'r') as f:
            js = f.read()

            sender.evaluate_js(js)


def opener(sender):
    print(sender.url)


def close_button(sender):
    sender.superview.close()


v = ui.View()
v.navigation_bar_hidden = True

w = ui.WebView('https://tweetdeck.twitter.com')
w.background_color = ui.Color.rgb(31, 41, 55, 1)
w.did_finish_loading = userjs
w.did_start_loading = opener
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
