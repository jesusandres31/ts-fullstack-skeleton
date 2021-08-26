import { Request, Response } from 'express';
import deals from '../database/deals.json';

class DealsCtrl {
  /**
   * Get deals.
   * @method get
   */
  public getDeals = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = deals;
      const query = req.query.q;
      let result: any[] = data;

      if (query) {
        // splitting operators
        const splittedQueryArr = query.toString().split(',');

        // starts iterating for each operator in the query string
        splittedQueryArr.forEach((row) => {
          // if query includes operator "title = "
          if (row.includes('title = ')) {
            let content = row.split('title = ')[1];
            result = result.filter((el) => el.title === content);
          }

          // if query includes operator "title : "
          if (row.includes('title : ')) {
            let content = row.split('title : ')[1];
            result = result.filter((el) =>
              el.title.toLowerCase().includes(content.toLowerCase())
            );
          }

          // if query includes operator "salePrice < "
          if (row.includes('salePrice < ')) {
            let content = row.split('salePrice < ')[1];
            result = result.filter(
              (el) => parseFloat(el.salePrice) < parseFloat(content)
            );
          }

          // if query includes operator "salePrice > "
          if (row.includes('salePrice > ')) {
            let content = row.split('salePrice > ')[1];
            result = result.filter(
              (el) => parseFloat(el.salePrice) > parseFloat(content)
            );
          }

          // if query doesn't inculde any operator
          if (
            !row.includes('title = ') &&
            !row.includes('title : ') &&
            !row.includes('salePrice < ') &&
            !row.includes('salePrice > ')
          ) {
            let content = row;
            result = result.filter((el) =>
              el.title.toLowerCase().includes(content.toLowerCase())
            );
          }
        });
      }

      // return results
      return res.status(200).json(result);
    } catch (e) {
      console.log(e);
      return res.status(500).json('Internal server error');
    }
  };
}

export const dealsCtrl = new DealsCtrl();
