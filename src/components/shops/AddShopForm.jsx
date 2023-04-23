import { useFormik } from "formik";
import React from "react";
import "./loginAndRegisterForm.scss";
import * as Yup from "yup";

function AddShopForm({ onAdd }) {
  const formik = useFormik({
    initialValues: {
      shopName: "Vinted",
      town: "Vilnius",
      startYear: "2010",
      description: "a shop that is worth it",
      ImageUrl: "https://meetfrank.com/blog/wp-content/uploads/2019/10/01e0aea7-8df6-4a1e-894e-08e6d3a69368-1539684203682-1080x512.png",
    },
    validationSchema: Yup.object({
      shopName: Yup.string()
        .min(4, "at least 4 simbols are required")
        .required(),
      town: Yup.string().min(4, "at least 4 simbols are required").required(),
      startYear: Yup.number()
        .min(1970, "not a valid year")
        .max(2022, "not a valid year")
        .required(),
      description: Yup.string()
        .min(6, "at least 6 simbols are required")
        .required(),
      ImageUrl: Yup.string()
        .min(5, "at least 5 simbols are required")
        .required(),
    }),
    onSubmit: (values) => {
      console.log("values ===", values);
      onAdd(values);
    },
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="">Shop Name</label>
          <input
            id="shopName"
            type="text"
            name="shopName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shopName}
          />
          {formik.touched.shopName && formik.errors.shopName ? (
            <div className="err">{formik.errors.shopName}</div>
          ) : (
            <div className="noErr"></div>
          )}
        </div>
        <div>
          <label className="">Town</label>
          <input
            id="town"
            type="text"
            name="town"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
          />
          {formik.touched.town && formik.errors.town ? (
            <div className="err">{formik.errors.town}</div>
          ) : (
            <div className="noErr"></div>
          )}
        </div>
        <div>
          <label className="">Start Year</label>
          <input
            id="startYear"
            type="number"
            name="startYear"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
          />
          {formik.touched.startYear && formik.errors.startYear ? (
            <div className="err">{formik.errors.startYear}</div>
          ) : (
            <div className="noErr"></div>
          )}
        </div>
        <div>
          <label className="">Description</label>
          <textarea
            id="description"
            type="textarea"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="err">{formik.errors.description}</div>
          ) : (
            <div className="noErr"></div>
          )}
        </div>
        <div>
          <label className="">Image Url</label>
          <input
            id="ImageUrl"
            type="text"
            name="ImageUrl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ImageUrl}
          />
          {formik.touched.ImageUrl && formik.errors.ImageUrl ? (
            <div className="err">{formik.errors.ImageUrl}</div>
          ) : (
            <div className="noErr"></div>
          )}
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddShopForm;
