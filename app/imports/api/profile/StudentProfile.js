import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StudentProfilesCollection. It encapsulates state and variable values for StudentProfiles.
 */
class StudentProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StudentProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      campus: String,
      campusCondition: {
        type: String,
        allowedValues: ['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC',
          'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu'],
        defaultValue: 'UH Mānoa',
      },
      major: String,
      minor: String,
      isGraduate: Boolean,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const StudentProfiles = new StudentProfilesCollection();
