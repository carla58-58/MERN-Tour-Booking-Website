import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";
import { adminAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// create new tour
router.post("/", adminAuth, createTour);

// update tour
router.put("/:id", adminAuth, updateTour);

// delete tour
router.delete("/:id", adminAuth, deleteTour);

// --- Place all /search routes BEFORE /:id ---
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

// get single tour (keep this AFTER all /search routes)
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

export default router;