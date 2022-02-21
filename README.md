`Member`: object with `id`, `name`, and `imgURL` properties
#
# `socket.on("...` values

`Message`:<br>
JSON object with the following properties: `content` (`String`), `timestamp` (`Date`), `author` (`Member`)

`SystemMessage`: <br>
JSON object with the following properties: `content` (`String`), `timestamp` (`Date`)

`Error`: <br>
JSON object with the following properties: `message` (`String`), `raw` (`Error`)