import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CompanyProfilesCollection. It encapsulates state and variable values for StudentProfiles.
 */
class CompanyProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CompanyProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      description: String,
      island: {
        type: String,
        allowedValues: ['Hawai‘i', 'Kaua‘i', 'Lana‘i', 'Maui', 'Moloka‘i', 'O‘ahu'],
      },
      city: String,
      address: String,
      zipCode: Number,
      owner: String,
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
 * @type {StudentProfilesCollection}
 */
export const CompanyProfiles = new CompanyProfilesCollection();
