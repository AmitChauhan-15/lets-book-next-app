import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      default: "India",
      trim: true,
    },
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    trim: true,
  },
  images: {
    type: [String],
    default: [],
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        trim: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  hotelId: String,
});

hotelSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Hotel = mongoose.models?.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
