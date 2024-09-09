"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeDataAccessService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const plenty_of_notes_1 = require("./plenty-of-notes");
let HomeDataAccessService = class HomeDataAccessService {
    constructor() {
        this.notes = [];
    }
    loadFakeNotes() {
        this.notes = [
            ...plenty_of_notes_1.notes.map((note) => ({
                ...note,
                dateAdded: new Date(note.dateAdded),
            })),
        ];
    }
    addNote(note) {
        this.notes.unshift({
            ...note,
            dateAdded: new Date(),
            id: `${this.notes.length + 1}`,
        });
        return (0, rxjs_1.of)();
    }
    getAllNotes() {
        console.log('Getting all notes');
        return (0, rxjs_1.of)([...this.notes]);
    }
    editNote(noteId, note) {
        const noteIndex = this.notes.findIndex((n) => n.id === noteId);
        if (noteIndex === -1) {
            return (0, rxjs_1.of)();
        }
        this.notes[noteIndex] = {
            ...note,
            id: noteId,
            dateAdded: this.notes[noteIndex].dateAdded,
        };
        return (0, rxjs_1.of)();
    }
    deleteNote(noteId) {
        const noteIndex = this.notes.findIndex((n) => n.id === noteId);
        if (noteIndex === -1) {
            return (0, rxjs_1.of)();
        }
        this.notes.splice(noteIndex, 1);
        return (0, rxjs_1.of)();
    }
    findNotesByText(text) {
        return (0, rxjs_1.of)(this.notes.filter((note) => note.title.toLowerCase().includes(text.toLowerCase()) ||
            note.content.toLowerCase().includes(text.toLowerCase())));
    }
};
exports.HomeDataAccessService = HomeDataAccessService;
exports.HomeDataAccessService = HomeDataAccessService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], HomeDataAccessService);
//# sourceMappingURL=home-data-access.js.map