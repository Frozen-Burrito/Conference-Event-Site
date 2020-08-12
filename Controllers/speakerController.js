const Speaker = require("../Models/Speaker");

const speaker_list = async ( req, res ) => {

    try {
        const speakers = await Speaker.find({});
        res.render('Speakers/allSpeakers', { speakers });

    } catch (error) {
        res.redirect('/');
    } 
}

const render_add_speaker = ( req, res ) => {

    context = {
        speaker: new Speaker(),
    }

    res.render('Speakers/addForm', context);
}

const handle_add_speaker = async ( req, res ) => {

    const { name, biography } = req.body;

    const newSpeaker = new Speaker({
        name,
        biography,
    })

    try {
        const savedSpeaker = await newSpeaker.save()
        res.redirect('/speakers/all');

    } catch (error) {
        context = {
            speaker: newSpeaker,
            errorMsg: "Couldn't add the new speaker."
        }

        res.render('Speakers/addForm', context);
    }
}

module.exports = {
    speaker_list,

    render_add_speaker,
    handle_add_speaker,
}