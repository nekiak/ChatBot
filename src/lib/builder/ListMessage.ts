import {NotImplementedError} from "../error/NotImplementedError";

interface row {
    title: string,
    rowId: string,
    description: string
}
interface section {
    title: string,
    rows: row[]
}
interface listMessage {
    text: string
    footer: string
    title: string
    buttonText: string,
    sections: [section?]
}
class ListMessageTemplate {
    message: listMessage;
    constructor() {
        this.message = {
            title: null,
            text: null,
            footer: "Soporte & Sugerencias @ gon#8568 (Discord)",
            buttonText: "Presioname",
            sections: []
        };
    }
}

export class ListMessage {
    message: listMessage
    constructor() {
        this.message = new ListMessageTemplate().message;
    }

    setTitle(title: string) {
        this.message.title = title
        return this;
    }

    setText(text: string) {
        this.message.text = text
        return this;
    }

    setButtonText(buttontext: string) {
        this.message.buttonText = buttontext;
        return this;
    }

    setFooter(footer: string) {
        this.message.footer = footer;
        return this;
    }

    setSection(section: section) {
        for (const sec of this.message.sections) {
            if (sec.title === section.title) return;
        }
        this.message.sections.push(section)
        return this;
    }

    addRowToSection(title, row: row) {
        if (this.message.sections.length === 0 ) {
            this.setSection({
                title: title,
                rows: [row]
            })
            return;
        }

        for (const section of this.message.sections) {
            if (section.title === title) {
                section.rows.push(row)
                return;
            }
        }
        this.setSection({
            title: title,
            rows: [row]
        })
        return this;
    }

    build() {
        if (!this.message.text) {
            throw new NotImplementedError("Missing text field in ListMessage")
        } else if (!this.message.title) {
            throw new NotImplementedError("Missing title field in ListMessage")
        } else if (!this.message.footer) {
            throw new NotImplementedError("Missing footer field in ListMessage")
        } else if (!this.message.buttonText) {
            throw new NotImplementedError("Missing buttonText field in ListMessage")
        } else if (this.message.sections.length === 0) {
            throw new NotImplementedError("There isn't any sections in ListMessage")
        }
        return this.message;
    }
}