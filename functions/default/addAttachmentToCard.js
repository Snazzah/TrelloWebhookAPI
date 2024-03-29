module.exports = function(req, request, webhook, icon){
	request.post(webhook+"/slack")
	.set("User-Agent", Config.useragent)
	.send({
		"text": "[]()",
		"attachments": [
			{
				"author_link": req.body.model.url,
		        "color": Colors.lite.add,
		        "author_name": "Trello: "+req.body.model.name,
		        "author_icon": icon,
		        "title": `${req.body.action.memberCreator.fullName} added an attachment to card \"${req.body.action.data.card.name}\"`,
						"title_link": `https://trello.com/b/${req.body.action.data.board.shortLink}`,
						"thumb_url": req.body.action.memberCreator.avatarHash ? "https://trello-avatars.s3.amazonaws.com/"+req.body.action.memberCreator.avatarHash+"/170.png" : undefined,
						"text": `**Member**: ${req.body.action.memberCreator.fullName} (${req.body.action.memberCreator.username})
**Card**: [${req.body.action.data.card.name}](https://trello.com/c/${req.body.action.data.card.shortLink})
**Attachment**: [${req.body.action.data.attachment.name}](${req.body.action.data.attachment.previewUrl2x})`,
				"image_url": req.body.action.data.attachment.previewUrl2x
		    	}
		    ]
	})
	.end((err2, res3)=>{
		return res3;
	})
}