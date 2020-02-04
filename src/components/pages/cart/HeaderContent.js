import React from "react";
import { useTranslation } from "react-i18next";

export default function HeaderContent() {
	const { t } = useTranslation();
	const listHeaderContent = ["Image", "Name", "Price", "Color", "Size", "Amount", "Total", "Remove"];

    return (
        <thead>
          <tr>
		  	{listHeaderContent.map((item, index) => (
				<th key={index}>{t(item)}</th>
			))}
          </tr>
        </thead>
    );
}
