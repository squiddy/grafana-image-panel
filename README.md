# grafana-image-panel

Shows and refreshes an image. That's it.

We have a slackbot running at work that accepts image URLs and we show the
current image on one of our grafana dashboards.

Right now it's about 5 lines of plain JavaScript to embed the image and refresh it from time to time. This repository is an attempt to complicate things... or rather learn a thing or two about grafana plugins. :-)