import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';

interface RequestDTO {
  id: string;
}
class DeleteTransactionService {
  public async execute({ id }: RequestDTO): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const transactionExists = await transactionRepository.findOne({
      where: { id },
    });

    if (!transactionExists) {
      throw new AppError('Does not exists', 400);
    }

    await transactionRepository.remove(transactionExists);
  }
}

export default DeleteTransactionService;
