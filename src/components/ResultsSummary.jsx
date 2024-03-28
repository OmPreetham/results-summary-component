import data from '../data/data.json'

const ResultsSummary = () => {
  return (
    <>
      <div className="wrapper">
        <section>
          <div className="layout-grid">
            <article>
              <div className="result-wrapper">
                <div>
                  <h4>Your Result</h4>
                </div>
                <div className="result__circle">
                  <p>
                    <span>76</span>
                    <span>of 100</span>
                  </p>
                </div>
                <div className="result__description">
                  <p>
                    <strong>Great</strong>
                  </p>
                  <p className="description">
                    You scored higher than 65% of the people who have taken
                    these tests.
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className="summary-wrapper">
                <div>
                  <h4>Summary</h4>
                </div>
                <div className="summary-list">
                  {data.map((list, index) => {
                    return (
                      <div key={index} className={`${list.category}-list`}>
                        <div>
                          <img
                            src={`${list.icon}`}
                            alt={`${list.category} Icon`}
                          />
                          <p>{list.category}</p>
                        </div>
                        <div>
                          <p>
                            <strong>{list.score}</strong>
                            <span> / 100</span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <button>Continue</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}
export default ResultsSummary
