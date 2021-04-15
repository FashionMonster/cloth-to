const checkCompositionRatioTotal = (getValues, setError, clearErrors) => {
  const allValues = getValues([
    "compositionRatio1",
    "compositionRatio2",
    "compositionRatio3",
  ]);

  const compRatio1Val = parseInt(
    allValues["compositionRatio1"] === "" ? 0 : allValues["compositionRatio1"]
  );
  const compRatio2Val = parseInt(
    allValues["compositionRatio2"] === "" ? 0 : allValues["compositionRatio2"]
  );
  const compRatio3Val = parseInt(
    allValues["compositionRatio3"] === "" ? 0 : allValues["compositionRatio3"]
  );

  if (compRatio1Val + compRatio2Val + compRatio3Val > 100) {
    setError("compositionRatio2", {
      type: "totalRatioMax",
      message: "比率合計が100を超えてます",
    });
  } else if (
    compRatio1Val + compRatio2Val + compRatio3Val < 1 &&
    (allValues["compositionRatio1"] !== "" ||
      allValues["compositionRatio2"] !== "" ||
      allValues["compositionRatio3"] !== "")
  ) {
    setError("compositionRatio2", {
      type: "totalRatioNegative",
      message: "比率合計がマイナス又は0です",
    });
  } else {
    clearErrors(["compositionRatio2"]);
  }
};

export { checkCompositionRatioTotal };
